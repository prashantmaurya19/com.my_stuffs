#include<iostream>
#include<queue>

using namespace std;
template<class T>
struct node{
        T data;
        node *left,*right;
        node(T data){
            this->data = data;
            left = right = NULL;
        };
        node(){};
};


template<class T>
class BinaryTree{
    private:
        struct node<T> *root = NULL;

        void inOrder(node<T>* root){
            if(root==NULL){
                return;
            }
            cout<<root->data<<" ";
            inOrder(root->left);
            inOrder(root->right);
        }
    public:
        BinaryTree(){

        }
        BinaryTree(T a){
            this->root = new node<T>(a);
        }
        void travers(){
            inOrder(root);
        }
        // struct node<T> * create(T data){
        //     struct node<T>* newnode = new node<T>(data);
        //     int n;
        //     cout<<"continue or over : ";
        //     cin>>n;
        //     if(n==-1){
        //         return newnode;
        //     }
        //     cout<<"Enter data : ";
        //     T a;
        //     cin>>a;
        //     if(newnode->left==NULL){
        //         newnode->left = create(a);
        //     }else{
        //         newnode->right = create(a);
        //     }
        //     return newnode;
        // }
        void insert(T key){
            if(this->root==NULL){
                this->root = new node<T>(key);
                return;
            }
            queue<node<T> *> q;
            q.push(root);
            while(!q.empty()){
      				node<T> *temp = q.front();
      				q.pop();
      				if (!temp->left){
	                temp->left = new node<T>(key);
	                break;
	            }else{
	                q.push(temp->left);
	            }
	            if (!temp->right){
	                temp->right = new node<T>(key);
	                break;
	            }else{
	                q.push(temp->right);
	            }
			}
        }

};

int main(){
    BinaryTree<string> prashant;
    prashant.insert("prashant");
    prashant.insert("hant");
    prashant.insert("nt");
    prashant.insert("shant");
    prashant.travers();
    return 0;
}
