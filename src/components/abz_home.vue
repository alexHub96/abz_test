<template>
    <div class="wrapper">

        <header>

            <div class="row">
                <a href="#">
                    <img src="../assets/img/icons/logo.svg" alt="logo">
                </a>

                <nav id="primary_nav">
                    <ul>
                        <li><a href="About me">About me</a></li>
                        <li><a href="Relationships">Relationships</a></li>
                        <li><a href="Requirements">Requirements</a></li>
                        <li><a href="Users">Users</a></li>
                        <li><a href="Sign Up">Sign Up</a></li>
                    </ul>
                </nav>
            </div>

        </header>

        <main>
            <div class="test-assignment"></div>

            <div class="acquainted"></div>

            <div class="relationships"></div>

            <div class="requirements"></div>

            <div class="users">
                <workerCard>

                </workerCard>
            </div>

            <div class="register-form">

                <form id="register-form" action="">
                    <input type="text" placeholder="Your name" pattern="\\w" required>
                    <input type="email" placeholder="Your email" required>
                    <input type="tel" placeholder="+38(__) ___-__-__"
                           pattern="^\+375(\s+)?\(?(17|25|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$"
                           required>
                    <select>
                        <option value="Select from list"> Select from list</option>
                        <option value="Sony">Sony</option>
                        <option value="Toshiba">Toshiba</option>
                        <option value="Acer">Acer</option>
                        <option value="Asus">Asus</option>
                    </select>

                    <label class="uploadbutton">
                        <button class="button">Upload</button>
                        <input type="file" accept="image/*" placeholder="Upload your photo" required/>
                    </label>


                </form>

            </div>
        </main>

        <footer id="footer">

            <div class="row">
                <a href="#">
                    <img src="../assets/img/icons/logo.svg" alt="logo">
                </a>
                <nav id="primary-footer-nav">

                </nav>
            </div>

            <div class="row">
                <nav id="footer-nav">

                </nav>


                <div class="contacts">

                </div>
            </div>

            <div class="row">

                <p></p>

                <!--<nav id="socials">-->
                    <!--<img src="../assets/img/icons/caret-down.svg" alt="">-->
                <!--</nav>-->

                <div class="row">
                    <caretDown> sdsds</caretDown>
                <cellPhone/>
                <coverIconUser/>
                    <img src="../assets/img/icons/facebook.svg" alt="" style="display: block">
                </div>
            </div>

        </footer>


    </div>
</template>

<script>

    import workerCard from './worker_card.vue'


    // import icons

    import caretDown from '../assets/img/icons/caret-down.svg'
    import cellPhone from '../assets/img/icons/cellphone.svg'
    import coverIconUser from '../assets/img/icons/cover-icon-user.svg'
    export default {
        name: "abzHome",

        components: {
            workerCard,

            //using icons

            caretDown,
            cellPhone,
            coverIconUser
        }
    }

</script>

<style scoped>

</style>