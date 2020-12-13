#include <iostream>
#include <string>
using namespace std;

/*
c++ initially called --> c with classes by stroustroup
In c++ only two scpecifiers private and public
other way to declare the class objects
class employee{
    class definition
}harry,prashant; ___> prashant and harry is objects 
*/

// Nesting of member functions

class binary
{
private:
    string s;

public:
    void read();
    bool check();
};
void binary ::read()
{
    while (true)
    {
        cout << "Enter a binary number = " << endl;
        cin >> s;
        if (check())
        {
            break;
        }
    }
}
bool binary ::check()
{
    for (int i = 0; i < s.length(); i++)
    {

        if (s.at(i) != '0' && s.at(i) != '1')
        {
            cout << "not a Binary number" << endl;
            return false;
        }
    }
    cout << "Binary number";
    return true;
}

int main()
{

    binary b;
    b.read();

    return 0;
}