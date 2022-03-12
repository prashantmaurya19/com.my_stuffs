#include<bits/stdc++.h>
using namespace std;

void reverse(int* arr,int size){
  int l =0 , r = size-1;
  while(l<r){
    int temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
}

int main() {
  int a[9] = {1,2,3,4,5,6,7,8,9};
  cout<<"Array before reverse\n"<<endl;
  for (int i = 0; i < 9; i++) {
    cout<<a[i]<<" ";
  }
  cout<<"\n"<<endl;
  reverse(a,9);
  cout<<"Array after reverse\n"<<endl;
  for (int i = 0; i < 9; i++) {
    cout<<a[i]<<" ";
  }
  cout<<"\n"<<endl;

  return 0;
}

//end
