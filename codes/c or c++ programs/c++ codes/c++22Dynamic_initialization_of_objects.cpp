#include<iostream>
using namespace std;

class Bankdeposit{
    int principal,years;
    float interestRate,returnValue;

    public:
        Bankdeposit(){};
        Bankdeposit(int p,int y,float r){
            principal = p;
            years = y;
            interestRate = r;
            returnValue = p;
            for (int i = 0; i < y; i++)
            {
                returnValue = returnValue * (1+r);
            }
        }
        Bankdeposit(int p,int y,int r){
            principal = p;
            years = y;
            interestRate = float(r)/100;
            returnValue = p;
            for (int i = 0; i < y; i++)
            {
                returnValue = returnValue * (1+r);
            }
        }
        void getInterest(){
            cout<<endl<<"your Principal = "<<principal
            <<"return value after "<<years
            <<"years is "<<returnValue;
        }

};

int main(){
    int a,b;
    float c;
    cout<<"Enter the p y r";
    cin>>a>>b>>c;
    Bankdeposit prashant(a,b,c);
    prashant.getInterest();
    
    return 0;
}