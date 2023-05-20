<template>
    <header class="header">
        <div class="container-grid">
            <nav>
                <ul>
                    <li>
                        <CycleText word="Home" linkTo="/"/>
                    </li>
                    <li>
                        <CycleText word="Portfolio" linkTo="/portfolio"/>
                    </li>
                    <!-- <li>
                        <CycleText word="About" linkTo="/about"/>
                    </li> -->
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
}
    nav {
        display: flex;
        justify-content: flex-end;
        padding-top: 40px;
        padding-bottom: 20px;
        grid-column: 1 / span 12;
        ul {
            display: grid;
            grid-template-columns: repeat(3, min-content);
            gap: 10px 20px;
            li {
                a {
                    color: inherit;
                    text-decoration: none;
                }
            }
        }
    }
</style>