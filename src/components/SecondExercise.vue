<template>
    <div class="main-container">
        <div class="tab-view">
            <div class="tab-buttons">
                <button v-for="(section, index) in sections" :key="index" @click="activeSection = index" :class="{ 'active': activeSection === index }">
                    {{ section.title }}
                </button>
            </div>
            <div class="tab-content">
                <div v-for="(section, index) in sections" :key="index" v-show="activeSection === index">
                    <h2>{{ section.title }}</h2>
                    <div class="content-text" v-html="section.content"></div>
                </div>
            </div>
        </div>

        <div v-for="(section, index) in sections" :key="index" :class="{ 'mobile-accordion-view': true }">
            <div class="accordion-btn" @click="toggleAccordion(index)" :class="{ 'active': activeSection === index }">
                {{ section.title }}
            </div>
            <div class="panel" :class="{ 'active': activeSection === index }">
                <div class="content-text" v-html="section.content"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SecondExercise',
  data() {
    return {
      activeSection: 0,
      sections: []
    };
  },
  mounted() {
    fetch('./json/data.json')
      .then(response => response.json())
      .then(data => {
        this.sections = data;
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
    },
    methods: {
    toggleAccordion(index) {
      this.activeSection = (this.activeSection === index) ? -1 : index;
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/styles.scss';
</style>