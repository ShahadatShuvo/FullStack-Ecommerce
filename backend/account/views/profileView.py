from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from account.serializers import UserProfileSerializer, UpdateUserProfileSerializer
from account.renderers import UserRenderer
from rest_framework.permissions import IsAuthenticated


class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UpdateUserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, format=None):
        serializer = UpdateUserProfileSerializer(
            request.user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
