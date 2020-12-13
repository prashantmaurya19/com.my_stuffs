#include <iostream>
#include <iomanip>
using namespace std;

class shop
{
    int itemId[100];
    int itemPrice[100];
    int count;

public:
    void initCount() { count = 0; }
    void setPrice()
    {
        cout << "\nEnter id = ";
        cin >> itemId[count];
        cout << "\nEnter price = ";
        cin >> itemPrice[count];
        count++;
    }
    int & setPrice(int a){
        itemId[count] = a;
        count++;
        return itemPrice[count-1];

    }
    void dipalayPrice()
    {
        cout << "ID      Price"<<endl;
        for (int i = 0; i < count; i++)
        {
            cout << itemId[i] << " " << setw(10)<< itemPrice[i] << endl;
        }
    }
};

int main()
{

    shop sweetWell;

    sweetWell.initCount();
    
    for (int i = 0; i < 3; i++){
        cout << "\nEnter price = ";
        cin>>sweetWell.setPrice(i);
        // sweetWell.setPrice();
    }

    sweetWell.dipalayPrice();

    return 0;
}