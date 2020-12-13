#include<bits/stdc++.h>

#define get(x) #x

using namespace std;

//this is a variadic function
int debug(int count,...){
  va_list list;

  va_start(list,count);
  for(int i=0;i<count;i++){
    int s= va_arg(list, int);
    cout<<s<<endl;
  }
  va_end(list);
  return 0;
}


int main(){
  int a,b,c;
  debug(3,a,b,c);
   return 0;
 }
