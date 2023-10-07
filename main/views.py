from .models import MyUser, FileUpload
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MyUserSerializer, FileUploadSerializer
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser

@api_view(['GET'])
def getData(request):
    users = MyUser.objects.all()
    users_serializer = MyUserSerializer(users, many=True)
    return Response(users_serializer.data)


@api_view(['POST'])    
def create_user(request):
    if request.method=='POST':
        data=request.data
        serializer = MyUserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response("Errrro")
    

@api_view(['PUT'])    
def update_user(request, id):
    if request.method=='PUT':
        data=request.data
        user_obj = MyUser.objects.get(id=id)
        serializer = MyUserSerializer(user_obj, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response("Errrro")
    
@api_view(['DELETE'])    
def delete_user(request, id):
    if request.method=='DELETE':
        data=request.data
        user_obj = MyUser.objects.get(id=id)
        user_obj.delete()
        return Response("Delete succesffully")
    

# import json
from rest_framework import status
class FileUploadView(APIView):
    """
    List all snippets, or create a new snippet.
    """
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = FileUploadSerializer 
    def get(self, request, format=None):
        files = FileUpload.objects.all()
        serializer = FileUploadSerializer(files, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        print(request.data)
        print(type(request.data["fileUpload"]))
        # data = json.dumps(request.data)
        # print(data)
        serializer = FileUploadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors)