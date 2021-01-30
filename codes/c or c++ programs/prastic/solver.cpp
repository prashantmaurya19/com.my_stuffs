// #include <sstream>
// #include<iostream>
// #include<vector>
// #include<string>
// #include<stdlib.h>
// #include<cstdarg>
// #include<map>
// #include<fstream>
// #include<algorithm>
#include<bits/stdc++.h>
using namespace std;

#define di(...) debug((#__VA_ARGS__),0,__VA_ARGS__);
#define ds(...) debug((#__VA_ARGS__),1,__VA_ARGS__);
#define d(x) cout<<"[ "<< #x <<" : "<<x<<" ]"<<" ";
#define ll long long
#define fo(n,i) for(int i = 0;i<n;i++)
#define ro(k,n,i) for(int i = k;i>=n;i--)
#define Fo(k,n,j) for(int j = k;j<=n;j++)
#define foreach(x,i) for(auto &i : x)
#define mem(a,b) memset(a, b, sizeof(a) )
#define optimize() ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0);
#define v vector
#define array_size(x) sizeof(x)/sizeof(x[0])
#define compare_to lexicographical_compare


vector<string> split(string,string);
int debug(string name,int count,...);
int gcd(int a, int b);
void testcase();
void sort_string_by_bb(string[],int);

// #define fo(n,i) for(int i = 0;i<n;i++)
// #define ro(k,n,i) for(int i = k;i>=n;i--)
// #define Fo(k,n,j) for(int j = k;j<=n;j++)
void solve(){
  ll t;
  cin>>t;
  while (t--) {
    // ll n;
    // cin>>n;
    if(((t>>0)&1)==0){
      cout<<"NO"<<endl;
    }else{
      cout<<"YES"<<endl;
    }
  }
}

int main(){
  // ifstream fil("testCases.txt");
  // auto cinbuf = std::cin.rdbuf(fil.rdbuf());
  solve();
  // cin.rdbuf(cinbuf);
  // fil.close();
  return 0;
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
