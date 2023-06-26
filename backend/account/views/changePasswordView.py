from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from account.serializers import UserChangePasswordSerializer
from account.renderers import UserRenderer
from rest_framework.permissions import IsAuthenticated


class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = UserChangePasswordSerializer(
            data=request.data, context={'user': request.user})
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password Changed Successfully'}, status=status.HTTP_200_OK)
