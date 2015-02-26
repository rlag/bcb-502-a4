function stringalign(ainstr, binstr, mispen, gappen, skwpen) {
   
   ain = ainstr.split('');
   bin = binstr.split('');
   var i, j ,k;
   var dn,rt,dg;
   var ia = ain.length;
   var ib = bin.length;
   var aout=[];
   var bout=[];
   var summary=[];
   var summaryVis=[];

   var cost=[];
   var marked=[];

   for(n=0 ; n < ia+1 ;++n) {
       cost[n] = new Array(ib+1);
       marked[n] = new Array(ib+1);
   }

   cost[0][0] = 0.;

   for (i=1;i<=ia;i++) cost[i][0] = cost[i-1][0] + skwpen;
   for (i=1;i<=ib;i++) cost[0][i] = cost[0][i-1] + skwpen;
   for (i=1;i<=ia;i++) for (j=1;j<=ib;j++) {
       dn = cost[i-1][j] + ((j == ib)? skwpen : gappen);
       rt = cost[i][j-1] + ((i == ia)? skwpen : gappen);
       dg = cost[i-1][j-1] + ((ain[i-1] == bin[j-1])? -1. : mispen);
       cost[i][j] = Math.min(dn,rt,dg);
   }

   i=ia; 
   j=ib; 
   k=0;

   while (i > 0 || j > 0) {
       marked[i][j]=1;       
       dn = rt = dg = 9.99e99;
       if (i>0) dn = cost[i-1][j] + ((j==ib)? skwpen : gappen);
       if (j>0) rt = cost[i][j-1] + ((i==ia)? skwpen : gappen);
       if (i>0 && j>0) dg = cost[i-1][j-1] + ((ain[i-1] == bin[j-1])? -1. : mispen);
       if (dg <= Math.min(dn,rt)) {
           aout[k] = ain[i-1];
           bout[k] = bin[j-1];
           summary[k++] = ((ain[i-1] == bin[j-1])? '=' : '!');

           var image = new Image();
           image.src = ((ain[i-1] == bin[j-1])? "match.png" : "close.png");
           summaryVis[k++] = image;

           i--; 
           j--;
       }

       else if (dn < rt) {
           aout[k] = ain[i-1];
           bout[k] = ' ';
           summary[k++] = ' '; 

           var image = new Image();
           image.src = "gap.png";
           summaryVis[k++] = image;

           i--;
       }

       else {
           aout[k] = ' ';
           bout[k] = bin[j-1];
           summary[k++] = ' ';

           var image = new Image();
           image.src = "gap.png";
           summaryVis[k++] = image;

           j--;
       }

       marked[i][j]=1;       
    }

    for (i=0;i<k/2;i++) {
        var t = aout[k-1-i];
        aout[k-1-i] = aout[i];
        aout[i]=t;

        t=bout[k-1-i];
        bout[k-1-i] = bout[i];
        bout[i]=t;

        t=summary[k-1-i];
        summary[k-1-i]=summary[i];
        summary[i]=t;

        t=summaryVis[k-1-i];
        summaryVis[k-1-i]=summaryVis[i];
        summaryVis[i]=t;
    }

    aout.size=k; 
    bout.size=k; 
    summary.size=k;
    summaryVis.size=k;
   
    // var table=""; 
    // table+="<tr><td></td>";
    // for(n=0; n<bin.length;++n)
    //     table+="<th>"+bin[n]+"</th>";
    // table+="</tr>";
    // for(n=0; n < cost.length; ++n)  {
    //     table+="<tr>";
    //     if(n < cost.length - 1)
    //         table+="<th>"+ain[n]+"</th>";
    //     else
    //         table+="<td></td>";
    //     for(m=0; m < cost[n].length; ++m) {
    //         if(marked[n][m]==1)
    //             table+='<td align="center" bgcolor="#a6bddb">'+cost[n][m] +"</td>";
    //         else
    //             table+='<td align="center">'+cost[n][m] +"</td>";
    //     }
    //     table+="</tr>";
    // }

    //  $("#mat").html(table);

     $("#newA").html(aout.join("").replace(/ /g, "&nbsp;"));
     $("#newB").html(bout.join("").replace(/ /g, "&nbsp;"));
     $("#summary").html(summary.join("").replace(/ /g, "&nbsp;"));

     $("#summaryVis").html(summaryVis);

}                                 

function update() {
    stringalign($("#a").val(), $("#b").val(), 
      1.0*$("#mispen").val(), 
      1.0*$("#gappen").val(), 
      1.0*$("#skwpen").val());
}
       
$(function() {

});