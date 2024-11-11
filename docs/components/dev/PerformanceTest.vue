<template>
  <treeselect :options="options" :multiple="true" />
</template>

<script>
  export default {
    data: () => ({
      options: [
        {
          hidden: false,
          id: 'a',
          label: 'A',
          children: [
            {
              hidden: true,
              id: 'd',
              label: 'D',
            },
            {
              hidden: true,
              id: 'f',
              label: 'F',
            },
          ],
        },
        {
          hidden: true,
          id: 'b',
          label: 'B',
        },
      ],
    }),
    mounted() {
      console.log(this.options)
    },
  }
</script>
