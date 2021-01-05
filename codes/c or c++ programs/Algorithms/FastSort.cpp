#include<bits/stdc++.h>
using namespace std;

#define fo(n,i) for(int i = 0;i<n;i++)
#define ro(k,n,i) for(int i = k;i>=n;i--)
#define Fo(k,n,j) for(int j = k;j<=n;j++)

void fastSort(string *num){
	string s = *num;
	Fo(1,s.size()-1,i){
		int l = 0;
		int r = i;
		int mid = i/2;
		if(mid==0){
			if(s[mid]>s[i]){
				char temp = s[mid];
				s[mid] = s[i];
				s[i] = temp;
			}
			continue;
		}
		while(true){
			if(s[mid-1]<s[i] && s[mid]>=s[i]){
				char element = s[i];
				Fo(mid,i,k){
					char temp = s[k];
					s[k] = element;
					element = temp;
				}
				break;
			}else if(s[i]>s[mid]){
				l = mid;
			}else if(s[i]<s[mid]){
				r = mid;
			}else{
				char element = s[i];
				Fo(mid+1,i,k){
					char temp = s[k];
					s[k] = element;
					element = temp;
				}
			}
			if(l==r-1){
				if(l==0 && s[0]>s[i]){
					char element = s[i];
					Fo(0,i,k){
						char temp = s[k];
						s[k] = element;
						element = temp;
					}
				}
				break;
			}
			mid = (l+r)/2;
		}
	}
	*num = s;
}


int main(){
	string s = "895632";
	fastSort(&s);
	cout<<s<<endl;
 	return 0;
 }
