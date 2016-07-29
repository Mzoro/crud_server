class ProdsController < ApplicationController
  before_action :set_prod, only: [:show, :edit, :update, :destroy]
  skip_before_filter :verify_authenticity_token

  # GET /prods
  # GET /prods.json
  def index
    @prods = Prod.all
  end

  # GET /prods/1
  # GET /prods/1.json
  def show
  end

  # GET /prods/new
  def new
    @prod = Prod.new
  end

  # GET /prods/1/edit
  def edit
  end

  # POST /prods
  # POST /prods.json
  def create
    @prod = Prod.new(prod_params)

    respond_to do |format|
      if @prod.save
        format.html { redirect_to @prod, notice: 'Prod was successfully created.' }
        format.json { render :show, status: :created, location: @prod }
      else
        format.html { render :new }
        format.json { render json: @prod.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /prods/1
  # PATCH/PUT /prods/1.json
  def update
    respond_to do |format|
      if @prod.update(prod_params)
        format.html { redirect_to @prod, notice: 'Prod was successfully updated.' }
        format.json { render :show, status: :ok, location: @prod }
      else
        format.html { render :edit }
        format.json { render json: @prod.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /prods/1
  # DELETE /prods/1.json
  def destroy
    @prod.destroy
    respond_to do |format|
      format.html { redirect_to prods_url, notice: 'Prod was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prod
      @prod = Prod.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def prod_params
      params.require(:prod).permit(:name, :des)
    end
end
