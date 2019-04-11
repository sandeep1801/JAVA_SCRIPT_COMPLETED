function CheckPassword(inputtxt)
{
    let passw=/^[A-Za-z]\w{7,15}$/;
    if(inputtxt.value.match(passw))
    {
        alert('Correct, try another...')
        return true;
    }
    else
    {
        alert('Wrong...!')
        return false;
    }
}