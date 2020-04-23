<template>
  <div class="footer">
    <img src="../assets/img/Vector.svg" alt="" srcset="" />
    <section>
      <p>
        426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246
        (ДК «Металлург»)
      </p>
      <p>+7 (3412) 93-88-61, 43-29-29</p>
      <p class="url">htc-cs.ru</p>
    </section>
  </div>
</template>

<style scoped>
.footer {
  background: #f2f2f2;
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding: 40px calc((100% - 1180px) / 2);
  height: 120px;
  margin-top: 72px;
}
img {
  margin-right: 40px;
}
section {
  font-family: Rubik-Regular;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  display: flex;
  flex-direction: column;
}
p {
  margin-bottom: 6px;
}
.url {
  font-family: Rubik-Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-top: 4px;
  margin-bottom: 0;
  color: #1f4766;
}
</style>
