<template>
    <div class="main-container">
        <PageHeader />
        <div class="container">
            <div class="section">
                <div class="section-image">
                    <img src="@/assets/photos/content-image.png" alt="Content image">
                </div>
                <div class="section-content">
                    <p class="section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus ullamcorper leo vitae placerat. Aliquam vestibulum justo nec suscipit faucibus. Ut nec massa quam. Morbi id massa vitae arcu aliquam volutpat. Nam ac varius magna, at condimentum nunc. In vitae diam at erat pulvinar efficitur non at massa. Maecenas blandit.
                    </p>
                    <button class="btn-read-more">READ MORE</button>
                </div>
            </div>
            <div class="section">
                <div class="section-image">
                    <img src="@/assets/photos/content-image.png" alt="Content image">
                </div>
                <div class="section-content">
                    <p class="section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas sapien arcu, et scelerisque ipsum faucibus id. Curabitur imperdiet condimentum odio nec mattis. 
                    </p>
                    <button class="btn-read-more">READ MORE</button>
                </div>
            </div>
            <div class="section">
                <div class="section-image">
                    <img src="@/assets/photos/content-image.png" alt="Content image">
                </div>
                <div class="section-content">
                    <p class="section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus ullamcorper leo vitae placerat. Aliquam vestibulum justo nec suscipit faucibus. Ut nec massa quam. Morbi id massa vitae arcu aliquam volutpat. Nam ac varius magna, at condimentum nunc. 
                    </p>
                    <button class="btn-read-more">READ MORE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from '@/components/Header.vue';

export default {
  name: 'HomePage',
  components: {
    PageHeader
  }
}
</script>