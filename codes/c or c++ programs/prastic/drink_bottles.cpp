#include<iostream>
using namespace std;

// test cases
// 9 3  ans = 13
// 15 4 ans = 19

int numWaterBottles(int numBottles, int numExchange) {
        int result = numBottles;
        int emptyBottles = numBottles;
        while(true){
            int canExchange = emptyBottles/numExchange;
            int remainEmptyBottle = emptyBottles%numExchange;
            if((canExchange*numExchange)<=emptyBottles){
                result += canExchange;
                emptyBottles = canExchange + remainEmptyBottle;
            }
			if(emptyBottles<numExchange || emptyBottles==1){
				break;
			}
        }
        return result;
    }


int main(){
	int a,b;
	cin>>a>>b;
	cout<<numWaterBottles(a,b);
	// cout<<a/b<<" reminder = "<<a%b;
 	return 0;
 }
