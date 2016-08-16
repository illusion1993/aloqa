# -*- coding: utf-8 -*-
import json

from django.shortcuts import render


def home(request):
    return render(request, 'index.html')
