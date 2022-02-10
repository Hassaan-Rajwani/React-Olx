import React from 'react';
import logo from '../../images/OLX_New_Logo.png'
import back from '../../images/back.png'

export default function addDetail(props) {
    return (
        <div>
            <div className='2Nav' style={{ boxShadow: '0px 0px 5px lightgrey', backgroundColor: '#F8F9FA', padding: '10px' }}>
                <img style={{ width: '30px' }} src={back} alt="" onClick={props.backBtn2} />
                <img style={{ width: '70px', marginLeft: '10px' }} src={logo} alt="" />
            </div>
            <br />
            <h2 style={{textAlign: 'center'}}>Product Detail</h2>
            <br />
            <div className='detail' style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div id="carouselExampleControlsNoTouching" class="carousel slide caro" data-bs-touch="false" data-bs-interval="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhgVFRYZGRgaGRoaGhgaGhoYHBweHRoaGRocHBgcIS4lHB4rHxoaJjomKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQrJCs0QDQ0NDQ0NDQ0MTY0NDQ0NDQ0NDQ0NDQ0NDQ0NTQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAD8QAAEDAQUFBAcHBAICAwAAAAEAAhEDBBIhMVEFQWFxgSKRobEGEzJCUsHwYnKCkqKy0SPC4fEz4hQVJENz/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMBBAUABv/EAC0RAAICAQMDAgcAAQUAAAAAAAABAhEDBBIhBTFRQWETIjJxgZGxoRQjUsHw/9oADAMBAAIRAxEAPwDetCUBKSuAVo1hjkBWdxR1cwFW1Tijih2JWRHvUb3Jb+CHc9ORbjEk9YkvoV1VRvr4Lhm062vwiMVqNmkCjTH2G/tCxFptPFajZlqAs9Ofgb5IMnIjUxtIti9Zu01R6x33neBjyCNq7RA3rG19qySdcTzOJ8UuMkmLwx2u2aBtYaqdtoELFf8AtyZAknRoLj4KVlvrHJkfeMeAkpinfZE5tZp8f1SS/psqVQYwkB7fT+FlWWusPfA+60ebpnuRNm2m9hl3bG/AB/MRgTwhH+CpHq2mc9tv71wX1YYpK7yKbzoxx7mlReva4XmmWmCDqCJCjtlYerf9xw/SVEuxpPmH4NXa6mHR3kqy2v7bjpe8qbv7U3aFvAETud5Kh2jtXF8fE4d7WNKWnRUhDbyHVawDuoPzSbMtDWvHGz0T3S3wu+Kylp2wL5h2mAxPcEKzazmuDgP/AKmMxMYtJJynDFTtnNramwdTqsEGt0kXm0doC+/He/8AaVYWfazQH4+6PJywteu57iSc5ywzwTC4nPHmSfNPjpMsu9IoZOtYYpqKb/waqx7fY2reJMXSJAJ0jLkiavpZTLouPIuPYT2ffuYjH7B71i5XK1DQxS+Ztmdm6zln9KSPUNg7ZpV3BoJDiZLHQC6Wua6CCQc5gGRhICk9Hj2XsON1wOPHs/2rzOy1y1wLXFpBBDhm0g4OHEFeiejFc1C+pEXwHEDc4ueS3oZHRVdRh+G7XZl3Raz/AFFqS5RFtdn9OnvLTUpzv7JLOvsJ+wnf0qnNp6yI8ku1saTeNWoehfUg9xHeoNgtlzxuueMYfXBVl6GmvRmttLA4Fpyc2QdCN/SWnoq+yuLSQcIJvDQHPuMEHQlWFH2WzuJaeRkN/tVdtBkBpMhwN0uG8EG66eneSuXgXj/4sMqiB0lRuoBzg5ri1wbEiCCDjBBHDdCQUnRJIwGQkbshBUdkb23uAhvZaBxEkuI3SCOYgrguy7ktGq6SxwAcBMj2XDUabpG6QobNTu1HE4XhgJwwJGQw9m7jwT7Z7jpi67d9oFuOoktJ5J1QguYeJP6SfrmuOXYbaKIh+paSPAxzBA6RooqTA4TOceQRFqqwDhiMRo453eZyxzlQWJpDIjEYHnAlTF8BRbosJTgmlLKAURV2qutGAkYlFWmpgqys+U2CLWGDIqj0I96dVeq+11IBTGXIxEtNsDVV2naOiDtdSSgGG++7JAAlx4DTiZHjoq8pu6QjPqFii5PsietbyTAxOgxPcFdM2s9tNjAx3Za0S4hgwEZYu8FR1bVcN1rQG7wMMcDi7MnEd+eSPsFqpv8Adhw1Mz3oY7ZOm+TAz9SztXFUgh1eo/C+Ggj3BJ/M7DwULrAwe028ftEu8Dh4LS2S22D/AMIsqXBWh16R2y6TdLTplEYBZ3ZtUva5h3NvN4QQHDqDPQp2OMWm67eTL1GozNq5Xa9GPAAyXJJXSnFMVcFwKUKSLJ7DXuh7JydeaODsT+q8m2msSYnNzW95A+aGL7tRhORlh/c3xBHVSOB9Ywfan8oLvNoSZ8Kj2nTs/wATSLyuB229p3TDc4zOQnh0Pis7/wCQXmXPznFxwxzhuXcEm1nl1R/No6ED/KotoVDN0yBjPMEjuAjDiUe6OKClVt+TG1eWeXM4bmkuKRq6NgaQDfvD7OSLpWGnMFvifks56KufeeASWARvjgRPT83FbiwWKtVY8U2F7WOvOIAwcW5ScTgAYCtYtQpQ3Pj070ZOTG1PaufUzFvs3q3lu7dKGV7tulLGv35Hp/gnuVGr0HaK5y5cuRnCrfeg9tHqqocfYIqfgc0+TmP7wsAr30VtBbXazdUBpuHAkOk8g1/5lV1UN2NvxyXdBk2Z178Go20CPVsJxawSdS6AT3tKk9GmEve34mxOgnHvkBR7VferP4YDoJ81L6Nn/wCT+F3kFkNUj1cuIGns8GR8Qvci2GuHQhvioNqY0i7e2SebcY/M0KbJ3AVI/MwE+LlHtH/iqD6xAJ8yhXcTH6kxHvIYTvu4DomWVvtnV8cg0Bn9s9U1j5a3m3wP+FPSZda1ugA7lL4GPjgirC8Q3XEnSMusx+UqKjUxumAWPu6YObLYH4o6FStMBzhmXRyg3fCCY4lRvYA9vQ8zLpPO85veuJ9g2iO078J7xH9pQrvbqfe/taUWD22n4hHdLgf3d4QlrddqOxzg+AHyQoCP1BSiqOTLTUgKtrWjDHJFGNjseNy5HWirmq2rWwSVbRJjFCVTKdFF+EKRz3yEDazgjChLSzBExhn7XvQuy39uoDndB/KcfNWNvp4KosGFoGkEHkez5kKlLiZkdQg3BpE21WXCCd858TKGsT4D6pwiboGRJzHSQekYSFY7StbgWMEYjEnIXSQfId6z9Ta7SSIJGp3jWBkFO2EZW2ee3zlGkhNp2sy1rTHZBLpi8TO/QQrP0Qtj/XQ7ENdDuF6WbsIxPPDqG6wMcJLiBu3xEgjAjIiOiM2NUpXTTY7cSSAQSd2fu5TniBoADhje9c9/8gZMkfhvjt7djR1GXXFuhITJRm02EVJOBcxjyNC5jXEeKDVlO1ZSap0KlTUqIBkNsE03ajtDm3H+Va2anLi7Rn7zgf0u70ArDYYizuEy5ryw8IAu9IIPVKn3+/8A0b/Rc1bsfmn+jJbSbFU/aBx+6Zb4E9y6106LqbXObJIAgZk5d+SK9IKd0g6G8eQ7J/c7uVNaabi0gbgR+YESmxleFqroV1DHs1N3Vhtg2rQbFMC4NcwTxIzz3LabF25Us7XtZdLXwSCJxgC8CDvAHcF5VTsrnua1rCHHCd3HLnu0XoVlsxa1oOAAAk4ZBDpn8ROEoql7FDUL4bUovlhNoZfpPnOZ781lVr322nRplxc1ziCGMEG84iASNzRMycyAFkFp4W+fBUark5cuXJ4JxRFjrFjw9vtNIc3m0hw74jqoE5joIOhlDKNpryFGTi016G59YHkvGTpcBwdl+4Kz9Fac1nu+FpHVxEeDSs/sp49QAPdJaOWbQfwuYei1uwLOW0CcnVHQDvDY/gOcOiwsirg9lHIp4lJeqLRnaun4nF3QA3T3Bqh2nUim77Trv9vyRQgEn3WNujrBPk3xVdb3GWN3zLvN3jCCKtkY1ckSx2IG+B3mES0ygarj2YHvD6HVT2V83oyDoB1EA9cZE8FzXAyS9Tg2Hlu5wLuRwDu+QecplXd9lwHOXNP8JxePWxvDCf1CPIptUdrm5g0xkXvANXIhdwxntt+67zag9pN7fT5lG0x2xwa7xLY8j3IO3sLn8hHiT80KF3yAV60qvrPwTXVCcUM9xOasJUa8IbRA+cE3okhSgKRhFChrxlwRhCGruREoobe3BDU7GW07+RflwG7+VeWbZxrVMR2G+1x33R9ZJ+16PZgDLJVMq5KeaKbMxteymoxr2jMTHBwF4c8B4rN09kVXOuwQJHaLTA6xHjHFbmwEOplpxukjv7Q81O2mAZGeu/vUrEppSs8flySxTlCuzKf/ANW5zbrWG7diT2QZme06NSBwA3qXYewaVB5fUcX4f8Y94SDdc7IAwJIkxlGatHEnPFNIVhxXHsVd8uee/cfbLQ6o9z3e04ydOQGiHKeU0okA3Y1KEiVSCcjdkPio9nxta8DUtlrh+z6yCSMqllRjwJuvg8n9nHrBQTXF+C50/L8PUJ+eP2M9IKQdM5eyfusBLj+YwqGzPN1p3xjzGB8QtVtaj2CPwg6x2nu6mAeIWQsxgvbo6Rydj5yj0sqybX6r+Gv1nHcFNej/AKHttzxkQOIa0E8zCjdVc72nE8yo1y1kkux5pipQkCVEQclXQuhcccE4BcAnLgWy/wDR0F7wwe+PFmZ/I5v5V6XTaGgADBjQxo1JA/6jvXlfo7abldjtHtPR00z0/qXj9xesU2hpxxDBJ4udM9cTh9tY2rhtyP35PSdPzb8Cj4ELYAbnEE8XE595Lu5A0m3qj3ZgENHQY/qvIi2PIEA9pxjqfaPQYDom3QxoGUzPAAEk+Q6quuEaUOFfkjc28RyMR8JiXcDmB1S2i0CmBqcGtG/DIKR7gxhc7A7413NHkq2qx19j3b3ARnA3BcuRkVffsEWWkWB1R7u0cToAMgnWapeh7gRm6N4nACNYj6IUFtqE5EYezhIkGASN7pkAag6InZVBwbNT2twnEDU8SZxXPtbJl2th9laYl2ZxI00HTzlDvp3nOP2o7gETUqhoLjkPoIWg4xxJJPMkygViYp3ZlZwUYCkIXNarBtHAJzGJ7GSprsBcgWwZ7ULUYXENbiXEADiUVWdgZ3K62Ns642+4dpw37hnHM4SpbpC8uRQjZwsrWMDWiAB3neeazu1WYHkVrrSMCsV6S1vcH4vkPmempVeXKK0G5Gd2RaP6r26gEDkYPmFbuaswyp6usx+68AeRwPnPRaoosL4o8z1LHtzX5IS1NIUjkwhPM1jCmlPIUFqrXGzE7gNSpIHFclC5SCImVWXmubvIw55jxAT0krmrVHJ07QTaq1+kx2rBExMu7TiYyJdPcshWbcrDRwLe7EfNaSiew5pMBjnY6NPbnoDEcFSbZpFpBu9rB934GtnPU4nq48ElS2yT8HrtRWfSJr1VjUqQFKtxHjxUqROY2TCm6IOa0nJci2WcjeorRTDYgKtDVRnPauR0sMlHcyMJUwJ6tCCWzkXgDgDLSdA4FpPcV67se0mpZ6bzm4Xn8HzdI43SHflC8eXoHohbb1B7N98Ea/1AQ4/nZV/MqGuhaUjU6VP/AHHDyaWgLxvbt3IZfyeabN7M45nlm1o0yaT0UleoGNLQJjCBvJAMeOagpteJvRJF7qcYKze56Jc8/oY7tOF7IYwcPFB2l5e8EEhrN4GMkRI55DqiPVucC5xhuZ4xz3Jlms97smQB2nHIknGIG8NgdSp4Q+1HnwdshjnPc9zQG5N39G+MneSVdAwmARwAGSFt1outmYJwaIyOePL5IH8zEN75DbZVvPDdze0dJ3D61StfhuQ9Jt0cczzTqdEPEnl3Z+Mo+ENpRVFEGqVlNPZTUpgJhfchGshQ1qwCSraMM0TszZZqEPeOzmG/FxOg81G5JWwJSUFukO2Ts++71jx2QZY3U/EeGiv3J8ABQWmuGNk8gNTuA8egSnJyZnTySyStgO07RcbA9o5aDVx4DxPeMNtJpMk449ccytFaahcS4nPP5AcB/OpVNbGE47tyYo8F/Dj2x57mQt9L65rRbPq36THHMtE8xg7xBVTtJmCn9Hasscz4XSOTsf3XknHxKjD6xi+VS8MtCEwhSuCaVaR55kFUwCdBKzlS3PdPagHcNy0r2ys5bLA5joAJaciMeh4qSCbY72hxBOJGHz+St4VPZtnPvC82BmcR5K5KkERNITki4FjWOYyoHuPZuEkYdpzDLB+qRxaFHbLMW0jUeO2/tO4D3W9B5lSVSBdc4SGPY4jgDDvAk9FL6R1J7A681Xkqkz0/Ssm/BT9OP2ZayOlg4S3uw8oUwQ1mwc5u7MdOyfIIpa+mnuxJ/wDuDz+qx7Mso+4qcx0EFMCVPaTVMrp0y0Y4ESktLBcJI5c1XteRkYTSVnQ0LjPdfCf5LUtSpRqhUqRctMpj1ovRC0ltdo3F10jWReb3XXfnWcCM2ZXLKgcMwQQNS0h7R1LQOqVnjug0O02T4eZS9z11o/qAbgXnmTdI8HEdE+qwOdBybgRqSAfAefBRUiDDgZBLHg/e7Oe8Xcv9Kerg4O3RB8wTwBkfiWE+56y+1AW0Hm66M2tkD7WMH8Ig/iGim2cR6psaA6Tx6oDbVTNozc5rYGZjEnxaFZsAa0DQfJc/pHNfIvcdOKqCb9VztzeyOmf6v2Iy12oMbJzODRqd3RV9nF1oBz3n67+qmKGYod2TueeG6BxOAnqiaAhjRoAELTxfO4ef+p/MjaeWS5nSKl2RO5CVa6SrUlTbKsgqvJI7LYJ+0dP5/wAo26Vlx1CLlII2Ps2+RUqDDNrTv+0RpoFowEkJj3hoJJgAYlJb3MzMmSWSVs6tVDQXOMAf66qgtNoLnSeg0GnPUpbZay86AZDwk8fLvQoM4bt58U6Ea5ZawYa+ZjHNnl5n+ENa2YHBHgaIS0DBGW0ZXaDM+Sr9h1LtYt+JpHUYjwvK42izMLOtfcrMOjhPImD4EqrP5Z2Z/UcW7G17GuITHBSppCsnj2QlNIUhCaQiBI4TXJ5TXBSCRpE4pFyBGlgILTkQR34IRoL2ifayJ4twcfrUI1OsFKaj27zBHJ3teIKXkjbTNnos0szg/Vfwztuo3HtdkJu9Dh+4BIivSgR2W7vMZDpgg2OkAjeJVvQy7x/IPWMSjmUl6oeEqalBWgYwqUJqUKSBUqRcFJA5PY8ggjMGe5RpQoOPVvRS0CpQY34bzeQYWGmD+BzSrS3VjdLW4nCdMwYnUjADisb6BW0AvY4n2ZaNSCA7vBZ+VaivaT2tQZjQ3brQdSSAeiw8sNs2j1mik8uKMvb+DbNTBeajsS03W6TJL3AfeJ6BFWkuDezdJ+1Kg2O7+iN8Tj1PfzUO07U5rXBuLiMIzH2uEJTVsu7W514A6VUOcSZvCRB3EEAhOfjgUPZxiXRE7uJieuHiutFUNaS7AYA9TB8DKNluqLSzDsiczieu760RbGYKJg8kZRb2QgbKs5GQo0HVX3G9TuaNVrLFZW02BoyA7zvJ4plgsTaTQ0Z5k6nVT1KgaCSYA3oZStnZszyOl2FqVA0FxMAZqlttpLzAwbmB8zx4bueSWm1FztAMhpxP2vLxI5fGAxJ3fPkjjGuWHiw18zG3dw68OJXBmBEQFIxkSOpO8rnOhNRZTdjHIaqEQ7DmoXnVEMiZ/aTRjqsjtBkmVsNpiZ8VmLewQQq2deorURuJpbBVv02P1aJ5xip3BU/otXvUiz4XHuOPzKuiEyDuKZ4rPDbka9yIhRuClcEwhMTENERCaVIQmuCIFkTk1PKYVILET6Fa5Ua7cQ5h/cOstMc0xNtLZpnh2u7FDL6R+ky/CzRl4YBa6V95dub2jzk9/wDgKrs+Rb8LiOmY8CFqnUAyiMRLheJ5iZ5ALLHCoQcCWzGkGBPGD3grtNLblXvweg6viUsG5d07HpUiVbB5YULkiVcQKlCQLlJAspZSLpXEFt6PWo06zSNdYmZbE9Z6LfWwXGgvAIJwaCRJ3kwMdNV5fQfDh3d+C9GtFs9bSpVCY7Awj3sLwA34hZ2rj8yl5PR9DyN3i/JdUaDi0XiGiPZaIwQduLWi4wC86JjvxO/+JVRQtpc5xLqhJyh0AcTwGgRtlo3WyczlOYGp4lUqo3VjcXbY7IAbvNI2jeMaC9lMO909Me9Ncccp+oARdhplok+0cSfrQYdFDGTdIPs5loJzj5fyjGZZFDUm56I6EpsoZHyQVagaCSYAEyqW1WsuOgBwHzPHyTbXai90D2RkPmeKGvcEcY1yy3hw180h7nRgM/rFOY2BqU1rY5/WCVztExDxS+CumOZTRhzTXKbJoRyCrvMxv8AiKr9w79EOY/lEMiiutzOys3b2yVqLYwuCobbR3pOVXEHJG4gXo1Uu13MOTh4jEeZWscFjrPSLKjapwAIu8RvJ6TC2hyQ4XxR5LqOPbkUvJC4JhClcFE5PRmMjKYVI5RlECyMphUrgo3KQWNTgU1cuIEZV/pQ7KmS08bp7DRxPZPQarM2tpFS+fix69k9BIWhcxxeR7pAPAHFs9wVNtqjL7gwDcXnifZbzGZ48gqrk4tPwz1ifxtIm/VV+Rq5MpPloOo/2nSt+MrVo8k006YqVNShECOShNCVcQKuSSulccKtdsJhfQwIF10GdDLp77wWQW69FbLdoFzh7TmwPuhxOH42lVtVWz8mr0iUo6pbfVclrZLC1ok8DGvE/wpKz11SodUI4F5jIbyN+oHDVZjPXpPuyaxm+8u91uA+07eeQGHUqyYJwH+kLRYGgAfW9EU2IGBMsaQgdEYAgqeSKBS2UZoyJdHNOpjvTWNjnqlDscNE2zVJZ700JofuXQpOoVRVH4wE2pWxgd6ie4DmpCSHOIChcJSk48U9jJUphkFSnIzwQv/rS8X3CGbvtdPg8+Wd/ZLDf7Th2Nw+L/p58s3W+IJPs6RnwAQyd8FeWTc9qMHtxmbtwMAaq52XVv0WO3xB5jA+SB20wvnUYROU7hq6MzuHjF6L1ey9h90ggcDn5JMflkY/V8dwUvBcuUblK8KJysI84yNyjcFKVG4IkCyNyjKldruUDKgfgwOf/APm1zwObmi63qQptI6MJSdRV/YVJCLZs20FpcWBgBj+o4FxOUNYyQTOHtDFWWztg9oOqvvxjdgNpyBJvAyXNGM3jGGSHd4LuLpuefLVL3AGsLbK54xc9zRTG8kXgxw4S97uTWHJwVDbLD6umWky8knrvPIfWa3fqQ4+ucIY0EUxGMHN0fE8+EDRZrblAuJbkTi4/CNzR9r5k7oSJxtWej0+FYsSj3pGOsTwWkDc4j5+ZPciklbZr6EPc2Gv3Y9kDInTPHmuha2jnuxJPuuDy2vwSxZXaq+UInJA0qSjRc83WguOjQXHuCtNpdymk26Q1cr6xeiVqf7lzLF5Dc+Ak+CvrB6Bg41KpInJjQAdYc6THGAkT1OOPr+izDQ5p+lfcwrWE5BF2bZzn5eEu/bMdYXptL0ds1AXhSaY3vJef1YIezsvOJgNHARA4cT9bkiWsv6UaODozkrnLj2M5sv0Y7UvkAHEujwaJB5kxwK0r2hoDW5AQB49SSSSeaJfAEDIIN5JyzJgTumT5DyVaWSU+ZM2tJosWDmK58vuQNbeeWE5ATxJAJ6YhGNZGQ3KKzNAvDfJB1zPnmppSmXW2OaUVRHBDsCnpOlCxc+wbTyRSEplFByWynMx95KXYEBcuRmsK1Q1q2MDv/hcuUo5EQwSudjmuXIwhzGyrPZ9hvgOfgzMN+L/r58s+XIZFfUyaVItKzwBJy015BVVqlxnph7uoGrvrLPly6IjEUVvsgIgf6356zv3rPUbHVp1TUY2WNkP4jMgcRnP+1y5dKKtDNVBTg4vsXVG1MeJY4HhkRzBxCgrW2m0wXi98Le278rZKVco3OkeR+FF5dnpY+hTrVP8AjoujK9UIpt7sX/pRrtgVYmpWDZybTaJ5X33p5hoyK5cj9Tdw6DBGdVZNsz0aoudec0va0zeqEvk8A4kNy3ALRvIHZbDQBJIgBrdee4cid0FFyF9yztipbYql7AYIe4ECABDB8IiL3MjLQcylLPWONJuDG/8AIRvIxFMHxcem7Hlyh9gsnCSQ3aFoAbMSAYY3KTle5Dd1OhVdsuwNqvL3HsNN5zvjfhhGgnD/ADCVch8HPsi6Zs5lQl72i7uBiMPkMes6BUVs9E7LddUh7Lx7DWOidDdIMA5wIgLlyKM5J8CckY5HtmrXuEbF9FLOG3307+l8lwgb7uWu5XVKm1jS5rWtA7LGgBoEuugwN7jv06rly6WSTfIuEYJvbFL7BNFky1pwk3nbyd4Gny8jA0NAAEAZcNFy5DImXcptqVrx9W3E5nhw6+SYwXQQPriuXI12LcfpSBq73E3WtLjgTGQB3knAcAnWazuBvPIJ3NHstwxJdm53FcuXMm2Pc2DKYRvXLlw1EjVNSzXLkIEuwZTPmPNWDGiFy5BIpZD/2Q=="} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={"data:image/jpeg;base64,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"} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={"data:image/jpeg;base64,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"} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div className='price2' style={{ border: 'solid 2px lightgrey', borderRadius: '5px', height: '150px' }}>
                    <div className='malomaat' style={{ padding: '10px' }}>
                        <h1 style={{ fontWeight: 'bolder' }}>Rs 500000</h1>
                        <h5 style={{ marginTop: '-13px' }}>Iphone 12 Pro Max</h5>
                        <h5 style={{ marginTop: '-8px' }}>Mobile Phone</h5>
                        <p>Mon Feb 10 2022</p>
                    </div>
                    <div className='des' style={{ padding: '10px', border: 'solid 2px lightgrey', borderRadius: '5px' }}>
                        <h2 style={{ fontWeight: 'bolder' }}>Description</h2>
                        <p>Liquid Retina HD display · 15.5 cm / 6.1‑inch (diagonal) all-screen LCD Multi-Touch display with IPS technology ·</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
