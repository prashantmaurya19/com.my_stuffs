#include<iostream>
using namespace std;

void swaping(int *a,int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}

void quickSort(int a[],int size){
    for(int gap = size/2;gap >=1;gap = gap/2){
        for(int j = gap; j < size;j++){
            for(int i = j - gap; i >= 0;i = i - gap){
                if(a[i+gap]>a[i]){
                    break;
                }else{
                    int temp = a[i + gap];
                    a[i + gap] = a[i];
                    a[i] = temp;
                }
            }
        }
    }
}

int main(){

     int d[6] = { 67, 98, 78, 90,89,96};
    quickSort(d,6);
    for (int i = 0; i < 6; i++)
    {
        cout << d[i] << " ";
    }
    return 0;
}