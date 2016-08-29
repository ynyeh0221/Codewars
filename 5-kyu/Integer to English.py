def int_to_english(num):
        one={'1':'One', '2':'Two', '3':'Three', '4':'Four', '5':'Five', '6':'Six', '7':'Seven', '8':'Eight','9':'Nine'}
        ten={'2':'Twenty', '3':'Thirty', '4': 'Forty', '5':'Fifty', '6':'Sixty', '7':'Seventy', '8':'Eighty', '9':'Ninety'}
        ten2={'10':'Ten', '11':'Eleven', '12':'Twelve', '13':'Thirteen', '14':'Fourteen', '15':'Fifteen', '16':'Sixteen', '17':'Seventeen', '18':'Eighteen', '19':'Nineteen'}
        numrange={2:'Thousand', 3:'Million', 4:'Billion', 5:'Trillion', 6:'Quadrillion', 7:'Quintillion', 8:'Sextillion', 9:'Septillion'}
        if num==0:
            return "Zero"
        num=str(num)
        start=len(num)%3
        if start>0:
            num=[num[:start]]+[num[i:i+3] for i in range(start, len(num), 3)]
        else:
            num=[num[i:i+3] for i in range(start, len(num), 3)]
            
        subnum_ind=0
        res=[]
        for subnum in num:
            if subnum=="000":
                subnum_ind+=1
            else:
                ind=0
                if len(subnum)==1:
                    res+=[one[subnum[ind]]]
                    ind+=1
                else:
                    if len(subnum)==3:
                        if subnum[ind]>'0':
                            res+=[one[subnum[ind]]]
                            res+=['Hundred']
                        ind+=1
                    if subnum[ind]=='1':
                        res+=[ten2[subnum[ind:ind+2]]]
                    elif subnum[ind]=='0':
                        if subnum[ind+1]>'0':
                            res+=[one[subnum[ind+1]]]
                    else:
                        res+=[ten[subnum[ind]]]
                        if subnum[ind+1]>'0':
                            res+=[one[subnum[ind+1]]]
                if len(num)-subnum_ind>=2:
                    res+=[numrange[len(num)-subnum_ind]]
                subnum_ind+=1
        for i in xrange(len(res)):
            res[i] = res[i].lower()
        return ' '.join(res)
