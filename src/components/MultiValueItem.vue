<script>
  import { onLeftClick } from '../utils'
  import DeleteIcon from './icons/Delete'

  export default {
    name: 'vue-treeselect--multi-value-item',
    inject: [ 'instance' ],

    props: {
      node: {
        type: Object,
        required: true,
      },
    },

    methods: {
      handleMouseDown: onLeftClick(function handleMouseDown() {
        const { instance, node } = this

        // Deselect this node.
        instance.select(node)
      }),
    },

    render() {
      const { instance, node } = this
      const itemClass = {
        'vue-treeselect__multi-value-item': true,
        'vue-treeselect__multi-value-item-disabled': node.isDisabled,
        'vue-treeselect__multi-value-item-new': node.isNew,
      }
      const contairClass = {
        'vue-treeselect__multi-value-item-container': true,
      }
      const customValueLabelRenderer = instance.$scopedSlots['value-label']
      const labelRenderer = customValueLabelRenderer ? customValueLabelRenderer({ node }) : node.label

      return (
        <div class={contairClass}>
          <div class={itemClass} onMousedown={this.handleMouseDown}>
            <span class="vue-treeselect__multi-value-label">{ labelRenderer }</span>
            <span class="vue-treeselect__icon vue-treeselect__value-remove"><DeleteIcon /></span>
          </div>
        </div>
      )
    },
  }
</script>
