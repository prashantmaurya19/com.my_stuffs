// #include<sstream>
// #include<iostream>
// #include<vector>
// #include<string>
// #include<stdlib.h>
// #include<cstdarg>
// #include<map>
// #include<fstream>
// #include<algorithm>
#include <bits/stdc++.h>
#include <windows.h>
#include "BigInteger.h"
using namespace std;

#define di(...) debug((#__VA_ARGS__),0,__VA_ARGS__);
#define ds(...) debug((#__VA_ARGS__),1,__VA_ARGS__);
#define d(x) cout<<"[ "<< #x <<" : "<<x<<" ]"<<endl;
#define ll long long
#define fo(n,i) for(int i = 0;i<n;i++)
#define ro(k,n,i) for(int i = k;i>=n;i--)
#define Fo(k,n,j) for(int j = k;j<=n;j++)
#define foreach(x,i) for(auto &i : x)
#define mem(a,b) memset(a, b, sizeof(a))
#define optimize() ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0);
#define v vector
#define compare_to lexicographical_compare
#define array_size(x) sizeof(x)/sizeof(x[0])

vector<string> split(string,string);
int debug(string name,int count,...);
int gcd(int a, int b);
void testcase();
int power(int a,int b);
void PrimeFactorize(int);
// void setTextSize();
// #define fo(n,i) for(int i = 0;i<n;i++)
// #define ro(k,n,i) for(int i = k;i>=n;i--)
// #define Fo(k,n,j) for(int j = k;j<=n;j++)
void solve(){
	cout<<(char)97<<endl;
}

int main(){
  solve();
 	return 0;
}

// void setTextSize(){
// 	CONSOLE_FONT_INFOEX cfi;
// 	cfi.cbsize = sizeof(cfi);
// 	cfi.nFont = 0;
// 	cfi.dwFontSize.X = 0;
// 	cfi.dwFontSize.Y = 24;
// 	cfi.FontFamily = FF_DONTCARE;
// 	cfi.FontWeight = FW_NORMAL;
// 	std::wcscpy(cfi.FaseName,L"Arial");
// 	SetCurrentConsoleFontEx(GetStdHandle(STD_OUTPUT_HANDLE),FALSE,&cfi);
// }

void PrimeFactorize(int num){
	int arr[num+1];
	memset(arr,-1,sizeof(arr));
	for(int i = 2;i<=num;i++){
		if(arr[i]==-1){
			cout<<i<<endl;
			for(int j = i;j<=num;j+=i){
				if(arr[j]==-1){
					arr[j] = i;
					cout<<j<<" ";
				}
			}
			cout<<endl;
		}
	}
}


int power(int a,int n){
	if(n == 0){
	   return 1;
	}
	else if(n==1){
	   return a;
	}

	int r = power(a,n/2);
	if (n%2==0){
	   return r*r;
	}else{
	   return (r*a)*r;
	}
}

int gcd(int a, int b)
{
    // Everything divides 0
    if (a == 0)
       return b;
    if (b == 0)
       return a;

    // base case
    if (a == b)
        return a;

    // a is greater
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
}


void testcase(){
  ofstream file("testCases.txt");
  string data;
  while(true){
    getline(cin,data);
    data += "\n";
    if(data=="over\n"){
      break;
    }
    file<<data;
  }
  file.close();
}


 vector<string> split(string str,string regex) {
   vector<string> tokens;

   string::size_type start = 0;
   string::size_type end = 0;

   while ((end = str.find(regex, start)) != string::npos) {
     tokens.push_back(str.substr(start, end - start));
     start = end + 1;
   }

   tokens.push_back(str.substr(start));

   return tokens;
 }


 int debug(string name,int count,...){
   vector<string> names = split(name,",");
   va_list list;

   va_start(list,count);
   for(string e: names){
     if(count==0){
       int x= va_arg(list, int);
       cout<<"[ "<< e <<" : "<<x<<" ]"<<" ";
     }else{
       string x= va_arg(list, string);
       cout<<"[ "<< e <<" : "<<x<<" ]"<<" ";
     }
   }
   cout<<endl;
   va_end(list);
   return 0;
 }
