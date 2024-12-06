export const fetchTools = async (setTools)=>{
    try{
        const response = await fetch('public/tools.json')
        if(!response.ok){
            throw new Error(`Error fetching tools : ${response.statusText}`)
        }
        const data = await response.json();
        setTools(data);
    }catch (error){
        console.error('Error loading tools:',error)
    }
}

