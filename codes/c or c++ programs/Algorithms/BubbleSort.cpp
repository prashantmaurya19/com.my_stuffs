#include <iostream>
using namespace std;

void swaping(int *a,int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}

void BubbleSort(int n[],int size)
{
    for (int i = 0; i < size; i++)
    {
        bool check = false;
        for (int j = 0; j < size; j++)
        {
            if (n[j] < n[j + 1])
            {
                swaping(&n[j],&n[j+1]);
                check = true;
            }
        }
    }

}

int main()
{
    int d[7] = { 13, 4, 11, 12, 11, 13, 12};
    BubbleSort(d,6);
    for (int i = 6; i >=0; i--)
    {
        cout << d[i] << " ";
    }

    return 0;
}
/*
2 6 5 7
6 2 5 7
6 5 2 7
6 5 7 2

6 7 5 2

7 6 5 2
*/
