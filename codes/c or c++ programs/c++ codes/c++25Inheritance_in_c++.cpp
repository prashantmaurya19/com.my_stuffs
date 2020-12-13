#include<iostream>
#include<string>
using namespace std;

// base class
class employee{
    int Id;
    int salary;

    public:

        employee(){
            Id = 0;
            salary = 1000000;
        }

        // employee(int i,int sal){
        //     Id = i;
        //     salary = sal;
        // }

        void setData(int id){
            Id = id;
        }
        int getData(){
            // cout<<"Employe = "<<Id<<" Employe salary = "<<salary;
            return salary;
        }
};

// Drived Class syntax
/*
class {{drived-class-name}} : {{vidibility-mode}} {{base-class-name}}{
        class members/method/ets...
}

    Note:
    1. Default visibility mode is private
    2. private visibility mode : public member --> private
    3. public visibility mode : public member --> public, and private member never inherite
*/

// creating drived class ---> class programmer
class programmer : public employee{
    string language = "";

    public: 
    int salary;
        programmer(string s,int i = 1234){
            language = s;
            setData(i);
            salary = getData();
        }
        string getDetail(){
            return language;
        }
};

int main(){
    programmer prashant("c++",123);
    cout<<prashant.getDetail()<<endl;
    cout<<prashant.salary;
    return 0;
}