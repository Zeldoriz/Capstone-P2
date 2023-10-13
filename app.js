        window.onscroll = function () {
            scrollFunction()
            scrollFunctionBtn()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.getElementById("scrollnavbar").style.top = "0";
                mybutton.style.bottom = "10px"
            } else {
                document.getElementById("scrollnavbar").style.top = "-200px";
                mybutton.style.bottom = "-50px";
            }
        }

        let mybutton = document.getElementById("myBtn");

        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }


        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    if (entry.target == document.querySelector('#about .JShidden'))
                        entry.target.classList.add('show');
                    if (entry.target == document.querySelector('.hidden-SkillcardL'))
                        entry.target.classList.add('show')
                    if (entry.target == document.querySelector('.hidden-SkillcardM'))
                        entry.target.classList.add('show')
                    if (entry.target == document.querySelector('.hidden-SkillcardR'))
                        entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.JShidden');
        hiddenElements.forEach((el) => observer.observe(el));