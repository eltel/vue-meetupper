<template>
  <div class="container">
    <ErrorView
      :title="'You are not authorised to visit this page, please login'"
      :status="'401'"
      :navigateToPage="'PageLogin'"
      :navigateToText="'Navigate to Login'"
    />
  </div>
</template>

<script>
import ErrorView from "@/components/ErrorView";
export default {
  components: {
    ErrorView
  }
};
</script>

<style scoped></style>
