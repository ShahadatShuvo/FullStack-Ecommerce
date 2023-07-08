# views.py
from rest_framework import generics
from newsroom.serializers import TeamSerializer
from newsroom.models import Team


class TeamList(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
