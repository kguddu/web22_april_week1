const names=['Ms Dhoni','Yuvraj singh','Sachin tandulkar','Rohit shrama']
const classList=['one','two', 'three','four']
const url=["https://wallpaperset.com/w/full/1/4/6/465288.jpg","https://2.bp.blogspot.com/-Zv-zU8vd-r8/T3A0WtUj-8I/AAAAAAAADnQ/G3WtSjJ7ctA/s1600/Yuvraj+3.jpg",
"https://i.pinimg.com/736x/2d/5c/de/2d5cde1b3d7f7fa256bc7297b9ebe123--sachin-tendulkar-cricket.jpg","https://image-cdn.essentiallysports.com/wp-content/uploads/20200502164058/rohit-sharma-1587024172-1.jpg?width=600"]
for(let i=0; i <names.length;i++){
 const newElem=document.createElement('p')
 //newElem.innerText=names[i]
 newElem.innerHTML=`
 <img src="${url[i]}"/>
 <h1>${names[i]}</h1>
 `
 newElem.classList.add(classList[i])
 const target=document.querySelector('h1')


 target.appendChild(newElem)
}