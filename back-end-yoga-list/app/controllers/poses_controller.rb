class PosesController < ApplicationController

    def index
        @poses = Pose.all 
        render json: @poses
    end

    def show
        @pose = Pose.find(params[:id])
        render json: @pose
    end

    def create
        @pose = Pose.create(
            name: params[:name],
            image_url: params[:image_url],
            user_id: 1
        )
        render json: @pose
    end

    def update
       @pose = Pose.find(params[:id])
       @pose.update(params.permit(:name))
       render json: @pose 
    end

    def destroy 
        @pose = Pose.find(params[:id])
        @pose.destroy
        render json: @pose
    end

end
