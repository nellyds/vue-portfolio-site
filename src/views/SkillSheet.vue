<template>
  <div class="skillSheet">
    <v-responsive :aspect-ratio="16/9">
      <v-window v-model="onboarding" vertical>
      <div v-for="skill in skills" :key="skill.name">
      <v-card flat />
      <Skill :name= skill.name  :level=skill.level />

 

      </div>
      </v-window>
</v-responsive>
  </div>
</template>

<script>
import Skill from "@/components/Skill.vue"
export default {
  name: 'SkillSheet',
  components:{
    Skill
    },
data(){
    return{
        skills: [
          {'name':'java', 'level':60},
          {'name':'python', 'level':60},
{'name':'html5', 'level':80},

{'name':'sql', 'level':50},
{'name':'Phtoshop', 'level':80},
{'name':'InDesign', 'level':80}

        ]
    }
},
methods: {},
beforeMount(){
    
    this.$http.get("https://nelsondsilva.pythonanywhere.com/getAbout").then(function(data)
    {     
        this.aboutEntry = data.body.about;
    })    
}
}
</script>
