<template>
  <div class="p-4">
    <div class="d-flex align-items-center justify-content-center background-container">
      <div class="login-form d-flex align-items-center justify-content-center flex-column">
        <img src="@/assets/images/apisteLogo.png" />
        <H4 class="title">{{ $t('title.login') }}</H4>
        <el-form class="w-100">
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="username"
              :placeholder="t('place_holder.id')"
              size="large"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              type="password"
              v-model="password"
              :placeholder="t('place_holder.password')"
              size="large"
            />
          </el-form-item>
          <el-form-item>
            <el-button class="w-100" size="large" type="primary" @click="login">{{
              $t('button.login')
            }}</el-button>
          </el-form-item>
        </el-form>
        <span>
          {{ $t('forget_password_text') }}
        </span>
        <el-button @click="changeLanguage" size="small">{{
          $t('button.changeLanguage')
        }}</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const username = ref('')
const password = ref('')

const login = () => {
  if (!username.value || !password.value) {
    alert('Please fill in both fields')
    return
  }
  // Logic xử lý đăng nhập, có thể là gọi API hoặc các bước khác
  console.log('Logging in with', username.value, password.value)
}

// Hàm thay đổi ngôn ngữ
const changeLanguage = () => {
  const newLocale = locale.value === 'en' ? 'ja' : 'en'
  locale.value = newLocale
}
</script>

<style scoped lang="scss">
.login-form {
  height: 460px;
  width: 480px;
  background-color: white;
  border-radius: 12px;
  padding: 40px;
  ::v-deep(.el-input__prefix) {
    color: #007bff;
  }
}
.background-container {
  height: 100vh; /* Chiều cao 100% viewport */
  background-image: url('@/assets/images/loginBackGround.png'); /* Đường dẫn tới file ảnh */
  background-size: cover; /* Đảm bảo ảnh nền bao phủ toàn bộ */
  background-position: center; /* Căn giữa ảnh */
  background-repeat: no-repeat; /* Không lặp lại ảnh */
}
.title {
  margin: 28px;
}
</style>
