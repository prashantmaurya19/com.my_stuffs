#include<iostream>

using namespace std;

// structure in c++
// typedef is to rename the structure

typedef struct employee
{
    int id;
    float salary;
} ep;

// union ---> union shares its memory , you can use only one data type at a time

union current_car
{
    bool honda;
    int bike;
};



int main(){

    // enum provide a number to given instances to inprove  the readablity of code

    enum meal{breakfast , lunc, dinner}; 

    meal m1 = breakfast;

    cout<<m1;

    struct employee prashant;

    prashant.id = 89023;
    prashant.salary = 122000;

    // cout<<"pashant's salay = "<<prashant.salary<<endl;
    // cout<<"pashant's id = "<<prashant.id<<endl;

    union current_car mycar;

    mycar.honda = true;
    mycar.bike = 90;

    // cout<<"pashant's using honda "<<mycar.honda<<endl;
    // cout<<"pashant's using bike "<<mycar.bike<<endl;




    return 0;
}
