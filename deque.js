let arr=[];
let dispStack=()=>
{
	str='';
	for(let elem of arr)
	{
		str='<div class="btn btn-warning text-danger font-weight-bold mt-3">'+elem+'</div>'+str;
	}
	$('#show').html(str);
}
$('#addFirst').click(function()
{
	if($('#ele').val()==='')
	{
		alert('Insert Element...');
	}
	else
	{
		arr.length=arr.length+1;
		for(let i=arr.length-1;i>=0;i--)
		{
			arr[i]=arr[i-1];
		}
		arr[0]=$('#ele').val();
		dispStack();	
	}	
});
$('#addLast').click(function()
{
	if($('#ele').val()==='')
	{
		alert('Insert Element...');
	}
	else
	{
		arr.push($('#ele').val());
		dispStack();		
	}	
});
$('#pollFirst').click(function()
{
	if(arr.length===0)
	{
		alert('Queue Empty...')
	}
	else
	{
		delete arr[0];
		let arrFilter=arr.filter(el=>{
			return el!=null && el!='';
		});
		arr=arrFilter;
		dispStack();
	}
});
$('#pollLast').click(function()
{
	if(arr.length===0)
	{
		alert('Queue Empty...')
	}
	else
	{
		delete arr[arr.length-1];
		let arrFilter=arr.filter(el=>{
			return el!=null && el!='';
		});
		arr=arrFilter;
		dispStack();
	}
});
$('#peekFirst').click(function()
{
	if(arr.length===0)
	{
		alert('Queue Empty...')
	}
	else
	{
		str='';
		for(let elem=0;elem<arr.length;elem++)
		{
			if(elem===0) str='<div class="btn btn-success text-danger font-weight-bold mt-3">'+arr[elem]+'</div>'+str;
	        else str='<div class="btn btn-warning text-danger font-weight-bold mt-3">'+arr[elem]+'</div>'+str;
		}
		$('#show').html(str);
	}
});
$('#peekLast').click(function()
{
	if(arr.length===0)
	{
		alert('Queue Empty...')
	}
	else
	{
		str='';
		for(let elem=0;elem<arr.length;elem++)
		{
			if(elem===arr.length-1) str='<div class="btn btn-success text-danger font-weight-bold mt-3">'+arr[elem]+'</div>'+str;
	        else str='<div class="btn btn-warning text-danger font-weight-bold mt-3">'+arr[elem]+'</div>'+str;
		}
		$('#show').html(str);
	}
});
