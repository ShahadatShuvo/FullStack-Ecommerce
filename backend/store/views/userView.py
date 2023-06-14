from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from store.models import CustomUser as User
from store.serializers import CustomUserSerializer as UserSerializer
from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from django.urls import reverse
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import generics, permissions, status
from rest_framework.authentication import BasicAuthentication
from django.utils.encoding import force_bytes, force_str


# Create your views here.

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # authentication_classes = [BasicAuthentication]
    # permission_classes = [permissions.IsAuthenticated]


class CustomUserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)


class CustomUserLoginView(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class CustomUserLogoutView(generics.GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({'detail': 'Successfully logged out'})


class CustomUserPasswordResetView(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)

        current_site = get_current_site(request)
        mail_subject = 'Password Reset'
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk)).decode()

        reset_link = reverse('api_password_reset_confirm', kwargs={
                             'uidb64': uid, 'token': token})
        reset_url = f'http://{current_site.domain}{reset_link}'

        message = render_to_string('password_reset_email.html', {
            'user': user,
            'reset_url': reset_url,
        })

        send_mail(mail_subject, message, 'from@example.com', [email])

        return Response({'detail': 'Password reset email has been sent'})
