<template>
  <div>
    <div class="modal fade"
    id="staticBackdrop" data-backdrop="static" data-keyboard="false"
    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-white" id="staticBackdropLabel">
              <slot name="title"></slot>
            </h5>
          </div>
          <div class="modal-body">
            <slot name="content"></slot>
          </div>
          <div class="modal-footer">
            <slot name="showStatus"></slot>
            <button type="button" class="btn btn-outline-dark" data-dismiss="modal">OK!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  props: ['modalHide'],
  data() {
    return {
      isHide: this.modalHide || '',
    };
  },
  mounted() {
    const str = this.isHide ? 'hide' : 'show';
    $('#staticBackdrop').modal(str);
  },
};
</script>
