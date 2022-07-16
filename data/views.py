from django.shortcuts import render

# Create your views here.
def ChartView(request):
	return render(request, 'base.html')