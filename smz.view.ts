namespace $.$$ {

	export class $my_smz extends $.$my_smz {

		@ $mol_mem
		work_current() {
			return this.$.$mol_state_arg.value( 'work' )
		}

		@ $mol_mem
		filter_status() {
			return this.$.$mol_state_arg.value( 'status' )
		}

		@ $mol_mem
		pages() {
			return [
				this.Menu(),
				this.Works(),
				... this.work_current() ? [ this.Details( this.work_current() ) ] : []
			]
		}

		@ $mol_mem
		work_all() {
			return Object.keys( this.work_store().data() )
		}

		@ $mol_mem
		work_list() {

			let works = this.work_all()

			const status = this.filter_status()
			if( status ) works = works.filter( id => String( this.work_status( id ) ) === status )
			
			works.sort( ( a, b )=> {
				return this.work_deadline( a ) > this.work_deadline( b ) ? 1 : -1
			} )
			
			return works.map( id => this.Work_link( id ) )
		}

		work_title( id: string ) {
			return this.work_store().sub( id as any ).value( 'title' )
		}

		work_description( id: string ) {
			return this.work_store().sub( id as any ).value( 'description' )
		}

		work_status( id: string, next?: boolean ) {
			return this.work_store().sub( id as any ).value( 'status', next )
		}

		@ $mol_mem
		work_amount( id: string ) {
			const data = this.work_store().sub( id as any )
			const unit = new $mol_unit( data.value( 'amount' ) )
			unit.postfix = ()=> ' ' + data.value( 'currency' )
			return unit
		}

		@ $mol_mem
		work_deadline( id: string ) {
			return this.work_store().sub( id as any ).value( 'deadline' )
		}

		id( id: string ) {
			return id
		}

	}

}
