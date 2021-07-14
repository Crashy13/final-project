from django.urls import path, include


urlpatterns = [
    path('users/', include('accounts.urls')),
    path('reviews/', include('reviews.urls')),
    path('games/', include('games.urls')),
    path('wishlists/', include('wishlists.urls')),
    path('friends/', include('accounts.urls')),
    ]
