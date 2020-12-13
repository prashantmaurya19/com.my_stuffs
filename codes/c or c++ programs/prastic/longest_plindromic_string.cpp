#include <bits/stdc++.h>
#include<string>
#include<iostream>
#include<cmath>
using namespace std;

int maxProfit(vector<int>& prices) {
		cout<<"maxProfit is called !"<<endl;
        int maxprofit = 0,currBuy = -1;
        for(int i = 0;i<prices.size()-1;i++){
            if(prices[i]<prices[i+1] && currBuy==-1){
                currBuy = prices[i];
            }else if(prices[i]>prices[i+1] && currBuy!=-1){
				cout<<"maxprofit = "<<maxprofit<<"currBuy = "<<currBuy<<endl;
                maxprofit +=  prices[i]-currBuy;
                currBuy = -1;
            }
        }
		cout<<currBuy<<" <- currBuy"<<endl;
        return maxprofit;
    }

int main(){
	vector<int> v;
	v.push_back(7);
	v.push_back(1);
	v.push_back(5);
	v.push_back(3);
	v.push_back(6);
	v.push_back(4);
	// v.push_back(1);
	// v.push_back(2);
	cout<<maxProfit(v)<<endl;
	return 0;
}
