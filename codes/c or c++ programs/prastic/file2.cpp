#include <iostream>
#include <bits/stdc++.h>
using namespace std;

// 7
// 10 10 8 5 3
// 12 8 8 7 2
// 12343 43 4543 39 123212
// 1000000000 1000000000 1 1 1
// 1000000000 1000000000 1 1 1000000000
// 10 11 2 1 5
// 10 11 9 1 10

int main(){
	int t;
	cin>>t;
	while(t-->0){
		long long a,b,x,y,n;
		cin>>a>>b>>x>>y;
		cin>>n;
		long long gapA = a-x; //4 n = 2
		long long gapB = b-y; //1 n = 2
		if(x<=y || a<=b){
			cout<<"x <= y"<<endl;
			if(gapA>=n){
				cout<<"gapA >= n"<<endl;
					a -= n;
					n = 0;
			}else if(gapA<n){
				cout<<"gapA < n"<<endl;
				a -= gapA;
				n -= gapA;
				b -= n;
			}
		}else{
			cout<<"x > y"<<endl;
			if(gapB>=n){
				b -= n;
				n = 0;
			}else  if((gapB||gapA)<n){
				b -= gapB;
				n -= gapB;
				a -= n;
			}

		}
		cout<<a*b<<endl;
	}
	return 0;
}
