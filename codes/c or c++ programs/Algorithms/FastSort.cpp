#include<bits/stdc++.h>
using namespace std;

#define fo(n,i) for(int i = 0;i<n;i++)
#define ro(k,n,i) for(int i = k;i>=n;i--)
#define Fo(k,n,j) for(int j = k;j<=n;j++)

string fastSort(string num){
	string s = num;
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
			if(s[mid-1]<s[i] && s[mid]>s[i]){
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
			}else if(s[mid]=s[i]){
				char element = s[i];
				Fo(mid+1,i,k){
					char temp = s[k];
					s[k] = element;
					element = temp;
				}
				break;
			}
			if(l==r-1){
				if(s[0]<s[i]){
					break;
				}else	if(l==0){
					char element = s[i];
					int start = 0;
					if(s[0]=s[i]){
						start++;
					}
					Fo(start,i,k){
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
	return s;
}


int main(){
	string s = "9019293802810831038zzzzyyyywwwwuuuuuttqqqeee18139280130823prashantjfdklaprajklsfajdfljd80128303729579572937295sha20";
	// i  l  r   mid  i   l   r  mid mid-1
	// 25 21 25  23   9   8   9   9   9
	// 3   1  3  2    1  9  9
	string res = fastSort(s);
	cout<<s<<" "<<s.size()<<"\n"<<res<<" "<<res.size()<<endl;
 	return 0;
 }
