[...document.querySelectorAll('.mx-auto.p-4.w-full.max-w-[600px].lg:max-w-[1120px]')].forEach((d)=>{
    d.className = 'mx-auto p-4 w-full'
})

document.querySelector('footer>:nth-child(1)').nextElementSibling = 'dasdasd'
document.querySelector('.flex.items-center.justify-between.py-4.bg-white>:nth-child(1)').nextElementSibling.outerHTML