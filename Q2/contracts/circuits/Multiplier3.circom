pragma circom 2.0.0;

// [assignment] Modify the circuit below to perform a multiplication of three signals

template Multiplier2(){
   //Declaration of signals.
   signal input a;
   signal input b;
   signal output c;

   //Statements.
   c <== a * b;
}

template Multiplier3 () {  

   // Declaration of signals.  
   signal input a;  
   signal input b;
   signal input c;
   signal output d;  
   component temp1 = Multiplier2();
   component temp2 = Multiplier2();

   // Constraints.  
   temp1.a <== a;
   temp1.b <== b;
   temp2.a <== temp1.c;
   temp2.b <== c;
   d <== temp2.c;  
}

component main = Multiplier3();