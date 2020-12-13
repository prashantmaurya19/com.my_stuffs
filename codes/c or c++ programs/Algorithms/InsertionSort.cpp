#include <iostream>
using namespace std;

void InsertionSort(int a[],int size)
{       

        for (int i = 0; i < size; i++)
        {   
            int temp = a[i];
            int j = i-1;
            while(j>=0 && a[j]>temp){
                a[j+1] = a[j];
                j--;
            }
            a[j+1] = temp;
        }

}

int main()
{
    int b[7] = {7,9,8,3,1,5,2};
    InsertionSort(b,7);
    for (int i = 0; i < 7; i++)
    {
        cout<<b[i]<<" ";
    }
    return 0;
}