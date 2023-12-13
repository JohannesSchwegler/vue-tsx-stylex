import stylex from '@stylexjs/stylex'
import { defineComponent } from 'vue'

const styles = stylex.create({
  root: {
    width: '100%',
    color: 'red',
    fontWeight: 'bold',
    '@media (min-width: 800px)': {
      maxWidth: '800px'
    }
  }
})

export default defineComponent({
  setup() {
    return () => <div {...stylex.props(styles.root)}>Test</div>
  }
})
