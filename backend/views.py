from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post
from rest_framework import status
from .serializers import PostSerializer

@api_view(['GET'])
def getPost(request):
    Posts = Post.objects.all()
    serializer = PostSerializer(Posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getPostPage(request,pk):
    try:
        post = Post.objects.get(id=pk)
    except Post.DoesNotExist:
        return Response({"error": "Post not Found"}, status=404) 
    serializer = PostSerializer(post)
    return Response(serializer.data)   




@api_view(['POST'])
def getCreatePost(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(['PUT','PATCH'])
def getEditPost(request, pk):
    try:
        post = Post.objects.get(id=pk)
    except Post.DoesNotExist:
        return Response({'error': "Post Not Found"}, status=status.HTTP_404_NOT_FOUND)
    serializer =PostSerializer(post, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
