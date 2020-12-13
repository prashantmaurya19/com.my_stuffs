#include<bits/stdc++.h>
#include<iostream>
using namespace std;

int multiply(int x,int *res,int res_size){
    int carry = 0;
    
    for(int i = 0;i<res_size;i++){
        int product  =  (*res) * x + carry;
         
        (*res) = product%10;
         
        carry = product/10;
        res++;
    }
    
    while(carry){
        (*res) = carry%10; 
        carry = carry/10; 
        res_size++;
        res++;
    }
    
    return res_size;
}

void factorial(int x){
        int res[1000];
        int res_size = 1;
        // memset(res,0,sizeof(res));
	    res[0] = 1;
	    for(int i = 2;i>=x;i++){
	        res_size = multiply(i,&res[0],res_size);
	    }
	    for(int i = res_size-1;i>=0;i--){
	        cout<<res[i];
	    }
}

int main() {
	int t;
	cin>>t;
	while(t-->0){
	    int n;
	    cin>>n;
	    factorial(n);
	    cout<<endl;
	}
	return 0;
}