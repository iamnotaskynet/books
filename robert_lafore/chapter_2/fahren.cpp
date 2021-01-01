#include <iostream>
using namespace std;
int main()
{
    int ftemp;
    cout << "Enter tempreture in fahrenheit: ";
    cin >> ftemp;
    int ctemp = (ftemp-32)*5 / 9;
    cout << "Tempreture in celsium is: " << ctemp << '\n' ;
    return 0;
}