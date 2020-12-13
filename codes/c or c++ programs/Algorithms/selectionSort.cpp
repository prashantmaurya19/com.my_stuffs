#include<iostream>
using namespace std;

void selectionSort(int a[],int size){
    for(int i = 0;i < size-1;i++){
        int min = i;
        for(int j = i+1;j<size;j++){
            if(a[min]>a[j]){
                min = j;
            }
        }
        if(min!=i){
            int temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }

    }

}

int main(){

    int b[9] = {90,78,7,9,8,3,1,5,2};
    selectionSort(b,7);
    for (int i = 0; i < 7; i++)
    {
        cout<<b[i]<<" ";
    }

    return 0;
}
